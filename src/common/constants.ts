// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * Constants used throughout application
 */
export const constants = {
    version: "pubpreview_1.0",
    projectFormTempKey: "projectForm",
    projectFileExtensionOld: ".vott",
    projectFileExtension: ".fott",
    labelFileExtension: ".labels.json",
    ocrFileExtension: ".ocr.json",
    fieldsFileName: "fields.json",
    maxConcurrentServiceRequests: 3,
    statusCodeSucceeded: "succeeded",
    statusCodeFailed: "failed",
    apiKeyHeader: "Ocp-Apim-Subscription-Key",
    maxRetry: 8,
    initialRetryInterval: 500, // ms
    convertedImageFormat: "image/jpeg",
    convertedImageQuality: 0.7,
    convertedThumbnailQuality: 0.2,

    apiModelsPath: "/formrecognizer/v2.0-preview/custom/models",
    apiPreviewPath: "/formrecognizer/v2.1-preview.1/custom/models",
    apiPreviewComposePath: "/formrecognizer/v2.1-preview.1/custom/models/compose",

    pdfjsWorkerSrc(version: string) {
        return `//fotts.azureedge.net/npm/pdfjs-dist/${version}/pdf.worker.js`;
    },

    pdfjsCMapUrl(version: string) {
        return `//fotts.azureedge.net/npm/pdfjs-dist/${version}/cmaps/`;
    },
};
