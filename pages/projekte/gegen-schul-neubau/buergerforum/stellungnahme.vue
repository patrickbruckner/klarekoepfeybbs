<script lang="ts" setup>
definePageMeta({ layout: 'page' })

useHead({
  titleTemplate: '',
  title: 'Stellungnahme zum Bürgerforum - Gegen den Schul-Neubau - Bürgerforum',
})
</script>

<template>
  <LayoutPageWrapper id="content" class="space-y-10 max-w-3xl">
    <LayoutPageSection>
      <LayoutPageSectionTitle>
        Stellungnahme zum Bürgerforum - Das neue Schulzentrum Ybbs - am
        3.11.2023
      </LayoutPageSectionTitle>

      <BaseHeadline class="text-red-700">
        NICHT GENÜGEND. NEU DENKEN. FÜR YBBS !</BaseHeadline
      >

      <AwesomeButton
        to="/projekte/gegen-schul-neubau/buergerforum"
        class="w-fit"
      >
        zum Bericht über das Bürgerforum
      </AwesomeButton>
    </LayoutPageSection>

    <LayoutPageSection>
      Die Stadtgemeinde Ybbs hat in einem Newsletter zum Bürgerforum am 3.11.
      2023 eingeladen. Im Folgenden nimmt die überparteiliche
      „Bürger:Innenbewegung Klare Köpfe“ zu den Aussagen in diesem Newsletter
      Stellung.
      <span class="text-red-700">
        (Statements "Klare Köpfe" farblich hervorgehoben)
      </span>
    </LayoutPageSection>

    <LayoutPageSection class="text-red-700">
      <BaseHeadline>
        GRUNDSÄTZLICH fordern wir, dass die Entscheidungs-GRUNDLAGEN, auf die
        hier Bezug genommen wird, ÖFFENTLICH BEKANNT gemacht und - wenn nicht
        vorhanden - ehestens nachgeholt werden. Diese sind:
      </BaseHeadline>

      <ul class="list-disc list-inside pl-10">
        <li>Stadträumliches Konzept</li>
        <li>STANDORTANALYSEN für die alternativen Standorte</li>
        <li>Nachnutzungskonzepte von bestehenden Gebäuden</li>
        <li>prognostizierte Verkehrsbelastung</li>
        <li>
          Verlässliche Kostenschätzungen und Finanzierungskonzepte für die
          Varianten
        </li>
        <li>Ausreichende Information der Ybbser Bürger:Innen</li>
        <li>Öffentliche Diskussion</li>
      </ul>
    </LayoutPageSection>

    <LayoutPageSection>
      <BaseHeadline> Zu den Aussagen in diesem Newsletter: </BaseHeadline>

      <p>Die Vorteile des neuen Standorts im Detail:</p>

      <BaseHeadline>1. Wirtschaftlichkeit:</BaseHeadline>

      <BaseStatementWithCounter
        statement="Die Kosten der Sanierung übersteigen die eines Neubaus."
        statementFrom="Stadtgemeinde"
        answer="Diese Aussage ist überhaupt NICHT nachvollziehbar, da KEINE Kostenschätzungen bekannt gemacht worden sind."
      />

      <BaseStatementWithCounter
        statement="Nachnutzung der bestehenden Gebäude ist Win-win-Situation für Stadt und
      Anrainer-Betriebe."
        statementFrom="Stadtgemeinde"
      >
        <ul class="list-disc list-outside pl-4">
          <li>
            In Verbindung mit schon bestehenden Leerständen in der Innenstadt
            erscheint diese Aussage viel zu optimistisch, da auch hier keine
            Konzepte bekannt sind.
          </li>
          <li>
            Für welche (Anrainer-)Betriebe sollten die Gebäude von Interesse
            sein?
          </li>
          <li>Was sollte in den verschiedenen Gebäuden passieren?</li>
        </ul>
      </BaseStatementWithCounter>

      <BaseStatementWithCounter
        statement="Möglicher Deckungsbeitrag an den Errichtungskosten durch Erträge aus Verkauf und Nachnutzung."
        statementFrom="Stadtgemeinde"
        answer="Diese (schwache) Formulierung lässt vermuten, dass es nichts weiter ist als eine niedrig wahrscheinliche Möglichkeit und KEIN solides Konzept dahintersteht."
      />
    </LayoutPageSection>

    <LayoutPageSection>
      <BaseHeadline>2. Nachhaltigkeit</BaseHeadline>

      <BaseStatementWithCounter
        statement="Die Sanierung der bestehenden Gebäude ist mit modernen Unterrichtskonzepten unvereinbar."
        statementFrom="Stadtgemeinde"
        answer="Diese Aussage ist FALSCH. Gelungene, hochqualitative und funktionelle Architektur ist auch im Bestand möglich. Modernste Unterrichtskonzepte sind damit auf jeden Fall zu verwirklichen. Eine von der TU Wien 2019 durchgeführte Entwurfsstudie hat einige sehr sinnvolle Projektvarianten hervorgebracht, die eine gute Basis für einen Wettbewerb am Standort bilden könnten."
      />

      <BaseStatementWithCounter
        statement="Innovative Ausbildung braucht zeitgemäße Architektur, Ausstattung und Raumkonzepte."
        statementFrom="Stadtgemeinde"
        answer="Dieser Aussage schließen wir uns VOLLINHALTLICH an. Innovative Ausbildung braucht zeitgemäße Architektur und gute Baukultur. Diese besteht in der heutigen Zeit in der qualitätsvollen Auseinandersetzung mit dem Bestand und der Vermeidung der Versiegelung von fußläufig erreichbaren Sportflächen."
      />

      <BaseStatementWithCounter
        statement="Basis für einen Bildungs-Cluster (Campus) in Ybbs an der Donau."
        statementFrom="Stadtgemeinde"
      >
        <ul class="list-disc list-outside pl-4">
          <li>
            Von einem Campus zu sprechen ist völlig fehl am Platz: der am
            Sportplatz vorgesehene Standort hat KEINE Zukunftsfähigkeit, da
            räumlich und verkehrstechnisch auch äußerst eingeengt - keine
            Flexibilität für die Zukunft.
          </li>
          <li>
            Verlust fußläufig erreichbarer Sportflächen (alle wichtigen
            Funktionen in einer Stadt sollen in max. 15 min Gehzeit erreichbar
            sein)
          </li>
          <li>
            Es gibt keinen alternativen neuen Ort für die verlorenen
            Sportflächen. Dieser wäre auf jeden Fall nicht mehr fußläufig mit
            den anderen Schulstandorten verbunden. Eine Erhöhung des
            Verkehrsaufkommens und der Unfallrisiken wäre die Folge
          </li>
          <li>Definition Nachhaltigkeit siehe im Nachsatz</li>
        </ul>
      </BaseStatementWithCounter>
    </LayoutPageSection>

    <LayoutPageSection>
      <BaseHeadline>3. Zukunftssicherheit</BaseHeadline>

      <BaseStatementWithCounter
        statement="Andere zur Diskussion stehende Standorte befinden sich nicht im Eigentum der Gemeinde: hohe Pachtkosten auf Jahrzehnte hinaus wären die Folge, kein Eigentum am Schulneubau."
        statementFrom="Stadtgemeinde"
      >
        <ul class="list-disc list-outside pl-4">
          <li>
            Die von den "Klaren Köpfen" favorisierte Sanierungsvariante steht
            zur Gänze auf Gemeindegrund!
          </li>
          <li>
            Ein Ankauf freiwerdender Gebäude und Grundstücke im
            Innenstadtbereich sollte forciert werden, um für die Zukunft weitere
            Möglichkeiten zu schaffen.
          </li>
          <li>
            Die fehlende langfristige Planung seitens der Stadtgemeinde ist ein
            Mangel, der nicht durch einen Schnellschuss gelöst werden sollte und
            der noch weitere massive wirtschaftliche Folgen nach sich ziehen
            wird.
          </li>
        </ul>
        <p>
          Ein Ankauf freiwerdender Gebäude und Grundstücke im Innenstadtbereich
          sollte forciert werden, um für die Zukunft weitere Möglichkeiten zu
          schaffen.
        </p>
      </BaseStatementWithCounter>

      <BaseStatementWithCounter
        statement="Hoher Standard am Schulstandort Ybbs kann nur durch Neubau gesichert werden."
        statementFrom="Stadtgemeinde"
      >
        <ul class="list-disc list-outside pl-4">
          <li>Für diese Aussage FEHLT jegliche SACHLICHE Argumentation.</li>
          <li>
            Insgesamt ist eine Verlegung der Schulen an diesen Standort (FZZ)
            eine äußerst kurzfristig gedachte Lösung, die langfristig enorme
            Kosten verursachen wird und die städtebauliche Qualität noch weiter
            massiv verschlechtert.
          </li>
          <li>
            Alle Bewohner der Stadtgemeinde werden an dieser Fehlentscheidung
            und den unnötigen Kosten für den neuen Standort jahrzehntelang
            mitzahlen.
          </li>
        </ul>
      </BaseStatementWithCounter>
    </LayoutPageSection>

    <LayoutPageSection>
      <BaseHeadline>Statement Bürgermeisterin Ulrike Schachner:</BaseHeadline>

      <BaseStatementWithCounter
        statement="Die Grundsatzentscheidung des Gemeinderates für den Standort des Neuen Schulzentrums beim FZZ ist ein wichtiger Schritt auf dem Weg zu einer modernen, zeitgemäßen Ausstattung unserer HAK/HAS und IT-HTL. Jetzt können die konkrete Planung und alle weiteren Schritte wie etwa die Durchführung eines Architektenwettbewerbes Zug um Zug mit Hochdruck angegangen werden."
        statementFrom="Bürgermeisterin Ulrike Schachner"
        answer="Die Durchführung eines Architektenwettbewerbs für ein Projekt dieser Größenordnung ist nur sinnvoll, wenn eine seriöse Bedarfs- und Standortanalyse im Vorfeld durchgeführt wurde, und die Planungsgrundlagen GUT VORBEREITET wurden"
      />
    </LayoutPageSection>

    <LayoutPageSection>
      <BaseHeadline>Nachsatz zum Begriff "Nachhaltigkeit".</BaseHeadline>

      <BaseQuote by="Volker Hauff 1987 in Unsere gemeinsame Zukunft">
        Nachhaltige Entwicklung ist eine Entwicklung, die gewährt, dass künftige
        Generationen nicht schlechter gestellt sind, ihre Bedürfnisse zu
        befriedigen, als gegenwärtig lebende.
      </BaseQuote>

      <BaseQuote by="Wikipedia">
        Nachhaltiges Bauen bezeichnet einen Planungs- und Bauausführungsprozess
        und eine Nutzungsweise, die auf Nachhaltigkeit ausgerichtet sind; d. h.
        auf Bewahrung des Ökosystems und der Umwelt, auf den Nutzen für Mensch
        und Gesellschaft und auf Optimierung und Steigerung der ökonomischen
        Potenziale eines Gebäudes. Aufgrund der großen Bedeutung, die
        ökologische, ökonomische und sozio-kulturelle Faktoren im Bausektor
        besitzen, integriert nachhaltiges Bauen diese Faktoren in ein
        Gesamtkonzept für das Bauwerk.
      </BaseQuote>

      <BaseQuote by="www.baunetz.de">
        Zu den grundsätzlichen Überlegungen einer nachhaltigen Planung gehören:
        die Bedarfsanalyse, die Berücksichtigung der Nutzungsdauer und die
        Möglichkeit des kontrollierten Rückbaus. Ein Neubau sollte nur dann
        realisiert werden, wenn zur Deckung des Bedarfs kein Bestandsgebäude
        (um)genutzt werden kann.
      </BaseQuote>
    </LayoutPageSection>

    <AwesomeButton to="/projekte/gegen-schul-neubau" class="mt-4 w-fit">
      zum Projekt
    </AwesomeButton>
  </LayoutPageWrapper>
</template>

<style scoped>
p {
  margin-bottom: 1.5rem;
}
</style>
