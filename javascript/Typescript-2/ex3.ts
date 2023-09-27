function analyzeString(inputString: string): { length: number; words: number } {
    const trimmedString = inputString.trim();
    const words = trimmedString.split(/\s+/);
    const length = trimmedString.length;
    const wordCount = words.length;
    const result = {
      length: length,
      words: wordCount,
    };
  
    return result;
  }
  
  const input = "This is a sample string.";
  const result3 = analyzeString(input);
  console.log(result3); 