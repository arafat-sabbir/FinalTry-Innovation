const splitString = (inputString: string): string[] => {
    const characters: string[] = [];
    const regex = /[\s\S]/gu; // Regex to match any character including newlines
  
    let match: RegExpExecArray | null;
    while ((match = regex.exec(inputString)) !== null) {
      characters.push(match[0]);
    }
  
    return characters;
  };
  
  export default splitString;
  