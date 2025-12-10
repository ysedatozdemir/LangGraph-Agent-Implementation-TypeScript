/**
 * Main entry point for the greeting agent.
 */
import { createGraph } from "./graph.js";

async function main() {
  // Create the graph
  const graph = createGraph();

  // Test with different names
  const testNames = ["Sedat", "Alice", "Bob", "世界"]; // Including non-ASCII

  console.log("=".repeat(50));
  console.log("LangGraph Greeting Agent - Test Run");
  console.log("=".repeat(50));

  for (const name of testNames) {
    console.log(`\n📥 Input: ${name}`);

    // Invoke the graph
    const result = await graph.invoke({ name, greeting: "" });

    console.log(`📤 Output: ${result.greeting}`);
  }

  console.log("\n" + "=".repeat(50));
}

main().catch(console.error);