"use client";

import { useState } from "react";
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
}: {
  name: string;
  label: string;
  required?: boolean;
  value: YesNo;
  onChange: (value: "ja" | "nee") => void;
  detailsLabel?: string;
  detailsValue?: string;
  onDetailsChange?: (value: string) => void;
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
            {option === "ja" ? "Ja" : "Nee"}
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

  if (submitted) {
    return (
      <div className="bk-card p-8 text-center md:p-10">
        <span className="mx-auto flex size-14 items-center justify-center bg-primary/15 text-primary">
          <svg className="size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </span>
        <h2 className="mt-5 font-heading text-2xl font-bold uppercase tracking-wide text-foreground">
          Inschrijving ontvangen
        </h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Bedankt voor uw inschrijving. Wij nemen uw gegevens in behandeling en nemen contact met u op
          zodra uw dossier is overgedragen.
        </p>
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
          setError("Zet uw handtekening in het vak.");
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
        };

        try {
          const response = await fetch("/api/inschrijving", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });

          if (!response.ok) {
            const result = (await response.json()) as { error?: string };
            setError(result.error ?? "Het versturen is mislukt. Probeer het opnieuw.");
            return;
          }

          setSubmitted(true);
        } catch {
          setError("Het versturen is mislukt. Controleer uw internetverbinding en probeer het opnieuw.");
        } finally {
          setSubmitting(false);
        }
      }}
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="bk-section-label">Inschrijven</p>
        <h1 className="mt-2 font-heading text-2xl font-bold uppercase tracking-wide text-foreground md:text-3xl">
          Inschrijfformulier huisartsenpraktijk
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Vul onderstaand formulier in om u in te schrijven bij Bloem & Bloem huisartsen. Velden met
          een * zijn verplicht.
        </p>
      </div>

      <section className="bk-form-section mt-10 space-y-6">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Gegevens patiënt
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Voornaam" required>
            <input type="text" name="voornaam" required className="bk-input" />
          </Field>
          <Field label="Achternaam" required>
            <input type="text" name="achternaam" required className="bk-input" />
          </Field>
          <Field label="Geboortedatum" required>
            <input type="date" name="geboortedatum" required className="bk-input" />
          </Field>
          <Field label="BSN-nummer" required>
            <input type="text" name="bsn" required pattern="[0-9]{9}" className="bk-input" />
          </Field>
        </div>

        <fieldset className="space-y-3">
          <legend className="bk-label">Geslacht</legend>
          <div className="flex flex-wrap gap-4">
            {["Man", "Vrouw", "Anders"].map((option) => (
              <label key={option} className="flex items-center gap-2 text-sm text-foreground">
                <input type="radio" name="geslacht" value={option} className="size-4 accent-[var(--primary)]" />
                {option}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Straatnaam en huisnummer" required>
            <input type="text" name="adres" required className="bk-input" />
          </Field>
          <Field label="Postcode" required>
            <input type="text" name="postcode" required className="bk-input" />
          </Field>
          <Field label="Woonplaats" required>
            <input type="text" name="woonplaats" required className="bk-input" />
          </Field>
          <Field label="Telefoonnummer" required>
            <input type="tel" name="telefoon" required className="bk-input" />
          </Field>
          <Field label="E-mailadres" required>
            <input type="email" name="email" required className="bk-input" />
          </Field>
        </div>
      </section>

      <section className="bk-form-section mt-10 space-y-6">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Verzekeringsgegevens
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Zorgverzekeraar" required>
            <input type="text" name="zorgverzekeraar" required className="bk-input" />
          </Field>
          <Field label="Polisnummer" required>
            <input type="text" name="polisnummer" required className="bk-input" />
          </Field>
          <Field label="Naam hoofdverzekerde (indien anders)">
            <input type="text" name="hoofdverzekerde" className="bk-input" />
          </Field>
          <Field label="Geboortedatum hoofdverzekerde">
            <input type="date" name="geboortedatum_hoofdverzekerde" className="bk-input" />
          </Field>
        </div>
      </section>

      <section className="bk-form-section mt-10 space-y-6">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Gegevens voorgaande huisarts
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Naam vorige huisarts">
            <input type="text" name="vorige_huisarts" className="bk-input" />
          </Field>
          <Field label="Telefoonnummer vorige huisarts">
            <input type="tel" name="vorige_huisarts_telefoon" className="bk-input" />
          </Field>
          <div className="sm:col-span-2">
            <Field label="Adres vorige huisarts">
              <input type="text" name="vorige_huisarts_adres" className="bk-input" />
            </Field>
          </div>
        </div>
      </section>

      <section className="bk-form-section mt-10 space-y-6">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Medische gegevens
        </h2>
        <YesNoField
          name="medicijnen"
          label="Gebruikt u medicijnen?"
          value={medicijnen}
          onChange={setMedicijnen}
          detailsLabel="Zo ja, welke?"
          detailsValue={medicijnenDetails}
          onDetailsChange={setMedicijnenDetails}
        />
        <YesNoField
          name="allergieen"
          label="Heeft u allergieën?"
          value={allergieen}
          onChange={setAllergieen}
          detailsLabel="Zo ja, waarvoor?"
          detailsValue={allergieenDetails}
          onDetailsChange={setAllergieenDetails}
        />
        <YesNoField
          name="chronisch"
          label="Heeft u een chronische aandoening?"
          value={chronisch}
          onChange={setChronisch}
          detailsLabel="Zo ja, welke?"
          detailsValue={chronischDetails}
          onDetailsChange={setChronischDetails}
        />
        <YesNoField
          name="specialist"
          label="Bent u momenteel onder behandeling van een specialist?"
          value={specialist}
          onChange={setSpecialist}
          detailsLabel="Zo ja, welke?"
          detailsValue={specialistDetails}
          onDetailsChange={setSpecialistDetails}
        />
        <YesNoField
          name="instelling"
          label="Woont u op dit moment in een instelling of begeleid wonen?"
          required
          value={instelling}
          onChange={setInstelling}
        />
      </section>

      <section className="bk-form-section mt-10 space-y-6">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Toestemmingen
        </h2>
        <YesNoField
          name="delen_zorgverleners"
          label="Mag de praktijk informatie over uw gezondheid delen met andere zorgverleners (bv. apotheek, specialist)?"
          required
          value={delenZorgverleners}
          onChange={setDelenZorgverleners}
        />
        <YesNoField
          name="dossier_overdracht"
          label="Geeft u toestemming dat uw vorige huisartsenpraktijk uw medisch dossier aan ons mag versturen?"
          required
          value={dossierOverdracht}
          onChange={setDossierOverdracht}
        />
        <div className="space-y-1.5">
          <RequiredLabel>Handtekening patiënt / vertegenwoordiger</RequiredLabel>
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
          {submitting ? "Bezig met versturen..." : "Inschrijving versturen"}
        </button>
      </div>
    </form>
  );
}
