import { scanTable } from "../src/customer";

async function main() {
  const res = await scanTable();
  console.log(res);
}

main();
