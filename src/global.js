module.exports = {
    // CLIENT_ID: '966711173029-66l15a7sa908p8eps0skfkgv9ffo1tk8.apps.googleusercontent.com',
    // AGENT_SUPERVISOR:"https://agent-supervsior-c4unnrrr4a-uc.a.run.app/",
    AGENT_SUPERVISOR: process.env.CLIENT_URL + ":7740/",
    // AGENT_MANAGER: "https://agent-manager-c4unnrrr4a-uc.a.run.app/",
    AGENT_MANAGER: process.env.CLIENT_URL + ":3200/",
    // DIGITAL_BRAIN: "https://aios-universal-brain-image-i33a22cv3q-uc.a.run.app/",
    DIGITAL_BRAIN: process.env.CLIENT_URL + ":8000/",
    // TRANSLATOR: "https://translator-opfcbv5e7q-wl.a.run.app/process_audio/",
    TRANSLATOR: process.env.CLIENT_URL + ":8082/process_audio/",
    // AIOS_AGENT: "https://aios-agent-c4unnrrr4a-uc.a.run.app/",
    AIOS_AGENT: process.env.CLIENT_URL + ":7860/",
    FEEDBACK: "https://docs.google.com/forms/d/e/1FAIpQLScHIKeRwjO24HwNYKMkNu3bBkE2YeuyXI0dhoFY8B9uuiYriQ/viewform"
}