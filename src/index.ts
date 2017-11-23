export const type = "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>";
export const name = "<http://schema.org/name>";
export const image = "<http://schema.org/image>";
export const description = "<http://schema.org/description>";
export const text = "<http://schema.org/text>";
export const url = "<http://schema.org/url>";
export const sameAs = "<http://schema.org/sameAs>";
export const license = "<http://schema.org/license>";
export const sourceOrganization = "<http://schema.org/sourceOrganization>";
export const author = "<http://schema.org/author>";
export const about = "<http://schema.org/about>";
export const subjectOf = "<http://schema.org/subjectOf>";
export const citation = "<http://schema.org/citation>";
export const CreativeWork = "<http://schema.org/CreativeWork>";
export const VideoObject = "<http://schema.org/VideoObject>";
export const Person = "<http://schema.org/Person>";
export const ReadAction = "<http://schema.org/ReadAction>";
export const WriteAction = "<http://schema.org/WriteAction>";

import * as DBPedia from './dbpedia';
import * as KhanAcademy from './khan_academy';
import * as Knowledge from './knowledge';
import * as AcademicGraph from './mag';

export {
  AcademicGraph,
  DBPedia,
  KhanAcademy,
  Knowledge
};
