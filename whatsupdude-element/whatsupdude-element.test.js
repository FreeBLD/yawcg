import  { WhatsupDude } from "./whatsupdude-element";


test ("WhatsupDude has a property 'name' with value of 'WhatsupDude'", () => {
    const WhatsupDude = new WhatsupDude();
    expect(WhatsupDude.name).toBe('WhatsupDude');
});