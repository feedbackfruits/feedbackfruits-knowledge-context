"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.type = "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>";
exports.name = "<http://schema.org/name>";
exports.image = "<http://schema.org/image>";
exports.description = "<http://schema.org/description>";
exports.text = "<http://schema.org/text>";
exports.url = "<http://schema.org/url>";
exports.sameAs = "<http://schema.org/sameAs>";
exports.license = "<http://schema.org/license>";
exports.sourceOrganization = "<http://schema.org/sourceOrganization>";
exports.author = "<http://schema.org/author>";
exports.about = "<http://schema.org/about>";
exports.subjectOf = "<http://schema.org/subjectOf>";
exports.citation = "<http://schema.org/citation>";
exports.CreativeWork = "<http://schema.org/CreativeWork>";
exports.VideoObject = "<http://schema.org/VideoObject>";
exports.Person = "<http://schema.org/Person>";
exports.ReadAction = "<http://schema.org/ReadAction>";
exports.WriteAction = "<http://schema.org/WriteAction>";
const DBPedia = require("./dbpedia");
exports.DBPedia = DBPedia;
const KhanAcademy = require("./khan_academy");
exports.KhanAcademy = KhanAcademy;
const Knowledge = require("./knowledge");
exports.Knowledge = Knowledge;
const AcademicGraph = require("./mag");
exports.AcademicGraph = AcademicGraph;
