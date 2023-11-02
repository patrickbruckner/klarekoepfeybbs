<template>
  <LayoutPageSection>
    <LayoutPageSectionTitle>
      <span class="text-2xl font-bold">Warum wir uns einbringen</span>
    </LayoutPageSectionTitle>

    <div class="grid gap-5 md:grid-cols-2">
      <AwesomeCard>
        <AwesomeCardContent class="flex flex-col gap-5">
          <ProjectSchoolArgumentsArgument>
            Neubau auf 4 Ebenen
            <div><BaseValue v="13,5" unit="m" /> Gesamthöhe</div>
          </ProjectSchoolArgumentsArgument>

          <ProjectSchoolArgumentsArgument>
            Garagenebene im Grundwasser
          </ProjectSchoolArgumentsArgument>
          <ProjectSchoolArgumentsArgument>
            Zerstörung der Sportanlage
          </ProjectSchoolArgumentsArgument>
          <ProjectSchoolArgumentsArgument>
            Bodenversiegelung
          </ProjectSchoolArgumentsArgument>
          <ProjectSchoolArgumentsArgument>
            Neue Infrastruktur erforderlich
          </ProjectSchoolArgumentsArgument>
          <ProjectSchoolArgumentsArgument>
            Verkehrsbelastung
          </ProjectSchoolArgumentsArgument>
          <ProjectSchoolArgumentsArgument>
            Verwaister Schulring
          </ProjectSchoolArgumentsArgument>
          <ProjectSchoolArgumentsArgument>
            Verlassene Altstadt
          </ProjectSchoolArgumentsArgument>
        </AwesomeCardContent>
      </AwesomeCard>

      <AwesomeCard className="bg-green-50">
        <AwesomeCardContent class="flex flex-col gap-5">
          <ProjectSchoolArgumentsArgument pro>
            Verkehrsberuhigte Begegnungszone, Grünflächen
          </ProjectSchoolArgumentsArgument>

          <ProjectSchoolArgumentsArgument pro>
            <div>
              Weiternutzung von Bestandsbauten
              <div>deren Sanierung, Um-und Ausbau</div>
            </div>
          </ProjectSchoolArgumentsArgument>
          <ProjectSchoolArgumentsArgument pro>
            Keine weitere Bodenversiegelung
          </ProjectSchoolArgumentsArgument>
          <ProjectSchoolArgumentsArgument pro>
            Lebendiger und lebenswerter Raum
          </ProjectSchoolArgumentsArgument>
          <ProjectSchoolArgumentsArgument pro>
            Infrastruktur bereits vorhanden
          </ProjectSchoolArgumentsArgument>
          <ProjectSchoolArgumentsArgument pro>
            Mögliche Nachnutzung der Polizeischule als FH ab 2030
          </ProjectSchoolArgumentsArgument>
        </AwesomeCardContent>
      </AwesomeCard>
    </div>
  </LayoutPageSection>
</template>
