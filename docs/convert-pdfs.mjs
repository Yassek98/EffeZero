import { pdf } from "pdf-to-img";
import { writeFile, mkdir } from "fs/promises";
import { join, basename } from "path";

const pdfDir = "c:/Users/39327/Desktop/YassekProg/EffeZero/docs/Pdf";
const outDir = "c:/Users/39327/Desktop/YassekProg/EffeZero/docs/images";

const files = [
    "A. HOME SCROLL PAGE.pdf",
    "B. CHI SIAMO.pdf",
    "C. MEMBRIpdf.pdf",
    "D. PAGINA PER MEMBRO.pdf",
    "E. PROGETTI.pdf",
    "F. PAGINA PER PROGETTO piccolo.pdf",
    "G PAGINA PER PROGETTO grande.pdf",
    "H.ARCHIVIO.pdf",
    "Modalita VISUALIZZA FOTOGRAFIE.pdf",
    "Modalità VISUALIZZE FOTOGRAFIE.pdf",
];

await mkdir(outDir, { recursive: true });

for (const file of files) {
    const pdfPath = join(pdfDir, file);
    const name = basename(file, ".pdf").replace(/[^a-zA-Z0-9]/g, "_");
    console.log(`Converting: ${file}`);

    try {
        let pageNum = 1;
        const document = await pdf(pdfPath, { scale: 2 });
        for await (const image of document) {
            const outPath = join(outDir, `${name}_page${pageNum}.png`);
            await writeFile(outPath, image);
            console.log(`  -> ${outPath}`);
            pageNum++;
        }
    } catch (err) {
        console.error(`  ERROR: ${err.message}`);
    }
}

console.log("Done!");
