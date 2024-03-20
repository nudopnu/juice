import { Beer } from "./beer.model";

export interface Settings {
    videoInputDevice: MediaDeviceInfo | undefined;
    numberOfSamples: number;
    secondsPerSample: number;
    beers: Array<Beer>;
}

export const DEFAULT_SETTINGS: Settings = {
    videoInputDevice: undefined,
    numberOfSamples: 3,
    secondsPerSample: 10,
    beers: [
        { assignedNumber: 1, isAvailable: true, name: "Traubensaft" },
        { assignedNumber: 2, isAvailable: true, name: "Granatapfelsaft" },
        { assignedNumber: 3, isAvailable: true, name: "Superfrühstücksaft" },
        { assignedNumber: 4, isAvailable: true, name: "Apfel-Mangosaft" },
        { assignedNumber: 5, isAvailable: true, name: "Tomatensaft" },
        { assignedNumber: 6, isAvailable: true, name: "Gemüsesaft" },
        { assignedNumber: 7, isAvailable: true, name: "Karotten-Apfelsaft" },
        { assignedNumber: 8, isAvailable: true, name: "Sauerkrautsaft" },
        { assignedNumber: 9, isAvailable: true, name: "Zitronensaft" },
        { assignedNumber: 10, isAvailable: true, name: "Ingwersaft" },
    ],
};