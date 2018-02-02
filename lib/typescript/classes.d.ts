export declare type duration = string;
export declare type integer = number;
export declare type decimal = number;
export declare module RDF {
    type Resource = {
        id: string;
    };
}
export declare type VideoObject = RDF.Resource;
export declare type Thing = RDF.Resource;
export declare type ImageObject = RDF.Resource;
export declare type License = RDF.Resource;
export declare type Organization = RDF.Resource;
export declare type SemanticTag = RDF.Resource;
export declare type Annotation = Tag & {
    startPosition: integer;
    confidence: decimal;
    detectedAs: string;
};
export declare type Document = (Resource & Taggable) & {
    section: DocumentSection[];
};
export declare type DocumentSection = CreativeWork & {
    sectionOf: Document[];
    startPosition: integer;
    endPosition: integer;
};
export declare type Resource = CreativeWork & {
    topic: Topic[];
    tag: Tag[];
    annotation: Annotation[];
};
export declare type Video = (Resource & Taggable) & {
    caption: VideoCaption[];
};
export declare type VideoCaption = (CreativeWork & Taggable) & {
    captionOf: Video[];
    startsAfter: duration;
    duration: duration;
    language: string;
};
export declare type Entity = RDF.Resource & {
    fieldOfStudy: FieldOfStudy[];
    tag: Tag[];
    annotation: Annotation[];
    name: string;
    description: string;
};
export declare type FieldOfStudy = RDF.Resource & {
    entity: Entity[];
    resource: Resource[];
    parentFieldOfStudy: FieldOfStudy[];
    childFieldOfStudy: FieldOfStudy[];
    name: string;
    description: string;
    image: ImageObject[];
};
export declare type CreativeWork = RDF.Resource & {
    name: string;
    description: string;
    image: ImageObject[];
    license: License[];
    sourceOrganization: Organization[];
    text: string;
};
export declare type Tag = RDF.Resource & {
    resource: Resource[];
    entity: Entity[];
    score: decimal;
};
export declare type Taggable = RDF.Resource & {
    tag: Tag[];
    annotation: Annotation[];
};
export declare type Topic = CreativeWork & {
    resource: Resource[];
    previous: Topic[];
    next: Topic[];
    parent: Topic[];
    child: Topic[];
};
