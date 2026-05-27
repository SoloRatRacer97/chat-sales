import { legacySections, type LegacySectionKey } from '../lib/legacy-content';

type LegacyMarkupProps = {
  section: LegacySectionKey;
};

export function LegacyMarkup({ section }: LegacyMarkupProps) {
  return <div dangerouslySetInnerHTML={{ __html: legacySections[section] }} />;
}

type LegacyRouteSectionProps = {
  id: string;
  section: LegacySectionKey;
};

export function LegacyRouteSection({ id, section }: LegacyRouteSectionProps) {
  return (
    <div id={id} className="legacy-route">
      <LegacyMarkup section={section} />
    </div>
  );
}
