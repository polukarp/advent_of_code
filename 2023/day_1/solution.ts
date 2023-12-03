import * as fs from "fs";

fs.readFile("input.txt", "utf-8", (_, data) => {
    let sum = 0;
    const lines = data.split("\n");
    for (let line of lines) {
        const first = (findFirstNumber(line) || "").toString();
        const last = (findLastNumber(line) || "").toString();
        const pair = first + last;

        sum += Number.parseInt(pair);
    }
    console.log(sum);
});

const findFirstNumber = (str: string): number | null => {
    for (let i = 0; i < str.length; i++) {
        const toNum = Number.parseInt(str.at(i) || "");
        if (toNum) return toNum;
    }
    return null;
};

const findLastNumber = (str: string): number | null => {
    const reversed = str.split("").reverse().join("");
    return findFirstNumber(reversed);
};
