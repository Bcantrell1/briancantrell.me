interface Segment {
    text: string;
    isBold: boolean;
}

export const createTimeCodeSnippet = () => {
    const now = new Date();
    const then = new Date('2018-05-23T00:00:00.000Z');
    const diff = now.getTime() - then.getTime();
    const monthDiff = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    return `created ${monthDiff} months ago`;
};

export const parseBioText = (text: string): Segment[][] => {
    return text.split('\n').map((line) => {
        const segments: Segment[] = [];
        let match;
        const boldRegex = /\*\*(.*?)\*\*/g;

        let lastIndex = 0;
        while ((match = boldRegex.exec(line)) !== null) {
            if (match.index > lastIndex) {
                segments.push({ text: line.slice(lastIndex, match.index), isBold: false });
            }
            segments.push({ text: match[1], isBold: true });
            lastIndex = match.index + match[0].length;
        }

        if (lastIndex < line.length) {
            segments.push({ text: line.slice(lastIndex), isBold: false });
        }

        return segments;
    });
};