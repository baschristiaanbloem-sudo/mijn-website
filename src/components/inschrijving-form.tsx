"use client";

import { useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { SignaturePad } from "@/components/signature-pad";

type YesNo = "" | "ja" | "nee";

function RequiredLabel({ children }: { children: React.ReactNode }) {
  return <span className="bk-label">{children}*</span>;
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-1.5">
      {required ? <RequiredLabel>{label}</RequiredLabel> : <span className="bk-label">{label}</span>}
      {children}
    </label>
  );
}

function YesNoField({
  name,
  label,
  required,
  value,
  onChange,
  detailsLabel,
  detailsValue,
  onDetailsChange,
  yesLabel,
  noLabel,
}: {
  name: string;
  label: string;
  required?: boolean;
  value: YesNo;
  onChange: (value: "ja" | "nee") => void;
  detailsLabel?: string;
  detailsValue?: string;
  onDetailsChange?: (value: string) => void;
  yesLabel: string;
  noLabel: string;
}) {
  return (
    <fieldset className="space-y-3">
      {required ? <RequiredLabel>{label}</RequiredLabel> : <legend className="bk-label">{label}</legend>}
      <div className="flex flex-wrap gap-4">
        {(["ja", "nee"] as const).map((option) => (
          <label key={option} className="flex items-center gap-2 text-sm text-foreground">
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
              required={required}
              className="size-4 accent-[var(--primary)]"
            />
            {option === "ja" ? yesLabel : noLabel}
          </label>
        ))}
      </div>
      {value === "ja" && detailsLabel && onDetailsChange && (
        <label className="block space-y-1.5">
          <span className="bk-label">{detailsLabel}</span>
          <textarea
            value={detailsValue ?? ""}
            onChange={(e) => onDetailsChange(e.target.value)}
            rows={3}
            className="bk-input resize-y"
          />
        </label>
      )}
    </fieldset>
  );
}

export function InschrijvingForm() {
  const { locale, t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [medicijnen, setMedicijnen] = useState<YesNo>("");
  const [medicijnenDetails, setMedicijnenDetails] = useState("");
  const [allergieen, setAllergieen] = useState<YesNo>("");
  const [allergieenDetails, setAllergieenDetails] = useState("");
  const [chronisch, setChronisch] = useState<YesNo>("");
  const [chronischDetails, setChronischDetails] = useState("");
  const [specialist, setSpecialist] = useState<YesNo>("");
  const [specialistDetails, setSpecialistDetails] = useState("");
  const [instelling, setInstelling] = useState<YesNo>("");
  const [delenZorgverleners, setDelenZorgverleners] = useState<YesNo>("");
  const [dossierOverdracht, setDossierOverdracht] = useState<YesNo>("");
  const [handtekening, setHandtekening] = useState("");

  const genderOptions = [
    { value: t.common.male, label: t.common.male },
    { value: t.common.female, label: t.common.female },
    { value: t.common.other, label: t.common.other },
  ];

  if (submitted) {
    return (
      <div className="bk-card p-8 text-center md:p-10">
        <span className="mx-auto flex size-14 items-center justify-center bg-primary/15 text-primary">
          <svg className="size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </span>
        <h2 className="mt-5 font-heading text-2xl font-bold uppercase tracking-wide text-foreground">
          {t.inschrijving.successTitle}
        </h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">{t.inschrijving.successText}</p>
      </div>
    );
  }

  return (
    <form
      className="bk-card p-6 md:p-10"
      onSubmit={async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);

        if (!handtekening) {
          setError(t.inschrijving.signatureMissing);
          setSubmitting(false);
          return;
        }

        const formData = new FormData(e.currentTarget);
        const payload = {
          ...Object.fromEntries(formData.entries()),
          medicijnen_details: medicijnenDetails,
          allergieen_details: allergieenDetails,
          chronisch_details: chronischDetails,
          specialist_details: specialistDetails,
          handtekening,
          locale,
        };

        try {
          const response = await fetch("/api/inschrijving", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });

          if (!response.ok) {
            const result = (await response.json()) as { error?: string };
            setError(result.error ?? t.inschrijving.sendFailed);
            return;
          }

          setSubmitted(true);
        } catch {
          setError(t.inschrijving.networkError);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="bk-section-label">{t.inschrijving.label}</p>
        <h1 className="mt-2 font-heading text-2xl font-bold uppercase tracking-wide text-foreground md:text-3xl">
          {t.inschrijving.title}
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.inschrijving.intro}</p>
      </div>

      <section className="bk-form-section mt-10 space-y-6">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          {t.inschrijving.sections.patient}
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label={t.inschrijving.fields.firstName} required>
            <input type="text" name="voornaam" required className="bk-input" />
          </Field>
          <Field label={t.inschrijving.fields.lastName} required>
            <input type="text" name="achternaam" required className="bk-input" />
          </Field>
          <Field label={t.inschrijving.fields.birthDate} required>
            <input type="date" name="geboortedatum" required className="bk-input" />
          </Field>
          <Field label={t.inschrijving.fields.bsn} required>
            <input type="text" name="bsn" required pattern="[0-9]{9}" className="bk-input" />
          </Field>
        </div>

        <fieldset className="space-y-3">
          <legend className="bk-label">{t.inschrijving.fields.gender}</legend>
          <div className="flex flex-wrap gap-4">
            {genderOptions.map((option) => (
              <label key={option.value} className="flex items-center gap-2 text-sm text-foreground">
                <input type="radio" name="geslacht" value={option.value} className="size-4 accent-[var(--primary)]" />
                {option.label}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label={t.inschrijving.fields.street} required>
            <input type="text" name="adres" required className="bk-input" />
          </Field>
          <Field label={t.inschrijving.fields.postcode} required>
            <input type="text" name="postcode" required className="bk-input" />
          </Field>
          <Field label={t.inschrijving.fields.city} required>
            <input type="text" name="woonplaats" required className="bk-input" />
          </Field>
          <Field label={t.inschrijving.fields.phone} required>
            <input type="tel" name="telefoon" required className="bk-input" />
          </Field>
          <Field label={t.inschrijving.fields.email} required>
            <input type="email" name="email" required className="bk-input" />
          </Field>
        </div>
      </section>

      <section className="bk-form-section mt-10 space-y-6">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          {t.inschrijving.sections.insurance}
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label={t.inschrijving.fields.insurer} required>
            <input type="text" name="zorgverzekeraar" required className="bk-input" />
          </Field>
          <Field label={t.inschrijving.fields.policyNumber} required>
            <input type="text" name="polisnummer" required className="bk-input" />
          </Field>
          <Field label={t.inschrijving.fields.mainInsuredName}>
            <input type="text" name="hoofdverzekerde" className="bk-input" />
          </Field>
          <Field label={t.inschrijving.fields.mainInsuredBirthDate}>
            <input type="date" name="geboortedatum_hoofdverzekerde" className="bk-input" />
          </Field>
        </div>
      </section>

      <section className="bk-form-section mt-10 space-y-6">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          {t.inschrijving.sections.previousGp}
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label={t.inschrijving.fields.previousGpName}>
            <input type="text" name="vorige_huisarts" className="bk-input" />
          </Field>
          <Field label={t.inschrijving.fields.previousGpPhone}>
            <input type="tel" name="vorige_huisarts_telefoon" className="bk-input" />
          </Field>
          <div className="sm:col-span-2">
            <Field label={t.inschrijving.fields.previousGpAddress}>
              <input type="text" name="vorige_huisarts_adres" className="bk-input" />
            </Field>
          </div>
        </div>
      </section>

      <section className="bk-form-section mt-10 space-y-6">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          {t.inschrijving.sections.medical}
        </h2>
        <YesNoField
          name="medicijnen"
          label={t.inschrijving.questions.medication}
          value={medicijnen}
          onChange={setMedicijnen}
          detailsLabel={t.inschrijving.questions.medicationDetails}
          detailsValue={medicijnenDetails}
          onDetailsChange={setMedicijnenDetails}
          yesLabel={t.common.yes}
          noLabel={t.common.no}
        />
        <YesNoField
          name="allergieen"
          label={t.inschrijving.questions.allergies}
          value={allergieen}
          onChange={setAllergieen}
          detailsLabel={t.inschrijving.questions.allergiesDetails}
          detailsValue={allergieenDetails}
          onDetailsChange={setAllergieenDetails}
          yesLabel={t.common.yes}
          noLabel={t.common.no}
        />
        <YesNoField
          name="chronisch"
          label={t.inschrijving.questions.chronic}
          value={chronisch}
          onChange={setChronisch}
          detailsLabel={t.inschrijving.questions.chronicDetails}
          detailsValue={chronischDetails}
          onDetailsChange={setChronischDetails}
          yesLabel={t.common.yes}
          noLabel={t.common.no}
        />
        <YesNoField
          name="specialist"
          label={t.inschrijving.questions.specialist}
          value={specialist}
          onChange={setSpecialist}
          detailsLabel={t.inschrijving.questions.specialistDetails}
          detailsValue={specialistDetails}
          onDetailsChange={setSpecialistDetails}
          yesLabel={t.common.yes}
          noLabel={t.common.no}
        />
        <YesNoField
          name="instelling"
          label={t.inschrijving.questions.institution}
          required
          value={instelling}
          onChange={setInstelling}
          yesLabel={t.common.yes}
          noLabel={t.common.no}
        />
      </section>

      <section className="bk-form-section mt-10 space-y-6">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          {t.inschrijving.sections.consent}
        </h2>
        <YesNoField
          name="delen_zorgverleners"
          label={t.inschrijving.questions.shareCare}
          required
          value={delenZorgverleners}
          onChange={setDelenZorgverleners}
          yesLabel={t.common.yes}
          noLabel={t.common.no}
        />
        <YesNoField
          name="dossier_overdracht"
          label={t.inschrijving.questions.transferRecords}
          required
          value={dossierOverdracht}
          onChange={setDossierOverdracht}
          yesLabel={t.common.yes}
          noLabel={t.common.no}
        />
        <div className="space-y-1.5">
          <RequiredLabel>{t.inschrijving.fields.signature}</RequiredLabel>
          <SignaturePad onChange={setHandtekening} />
        </div>
      </section>

      <div className="mt-10 flex flex-col items-center gap-3">
        {error && (
          <p className="text-center text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
        <button type="submit" disabled={submitting} className="bk-btn w-full sm:w-auto disabled:opacity-60">
          {submitting ? t.inschrijving.submitting : t.inschrijving.submit}
        </button>
      </div>
    </form>
  );
}
