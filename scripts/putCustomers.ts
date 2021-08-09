import { addCustomer } from "../src/customer";

async function main() {
  for (let i = 0; i < 100; i++) {
    await addCustomer();
  }

  console.log("Done");
}

main();
