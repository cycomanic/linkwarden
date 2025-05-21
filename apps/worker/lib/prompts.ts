export const generateTagsPrompt = (prompt: string, description: string, text: string, title: string, tags: string[]) => `
${prompt}

Existing Tags: ${tags.join(", ")}

CONTENT STARTS HERE 

Title: ${title}

Description: ${description}

Text:
${text}

Tags:`;

export const predefinedTagsPrompt = (prompt: string, description: string, text: string, title: string,  tags: string[]) => `
${prompt}

Predefined Tags: ${tags.join(", ")}.

CONTENT STARTS HERE 

Title: ${title}

Description: ${description}

Text:
${text}

Tags:`;

export const existingTagsPrompt = (prompt: string, description: string, text: string, title: string, tags: string[]) => `
${prompt}

The existing tags are sorted from most used to least used. 

Existing Tags: ${tags.join(", ")}.

CONTENT STARTS HERE

Title: ${title}

Description: ${description}

Text:
${text}

Tags:`;
