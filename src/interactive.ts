/**
 * Interactive command-line interface for the greeting agent.
 */
import * as readline from "readline";
import { createGraph } from "./graph.js";

async function main() {
  // Create the graph once
  const graph = createGraph();

  console.log("=".repeat(60));
  console.log("🤖 LangGraph Greeting Agent - Interactive Mode");
  console.log("=".repeat(60));
  console.log("\nThis agent will greet you by name!");
  console.log("Type 'quit', 'exit', or 'q' to stop.\n");

  // Create readline interface
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const askForName = () => {
    rl.question("👤 Enter your name: ", async (name) => {
      const trimmedName = name.trim();

      // Check for exit commands
      if (
        trimmedName.toLowerCase() === "quit" ||
        trimmedName.toLowerCase() === "exit" ||
        trimmedName.toLowerCase() === "q" ||
        trimmedName === ""
      ) {
        console.log("\n👋 Goodbye! Thanks for using the greeting agent!");
        rl.close();
        return;
      }

      try {
        // Invoke the graph with user input
        const result = await graph.invoke({ name: trimmedName, greeting: "" });
        console.log(`🤖 ${result.greeting}\n`);
      } catch (error) {
        console.error(`❌ Error: ${error}\n`);
      }

      // Ask for next input
      askForName();
    });
  };

  // Start the input loop
  askForName();
}

main().catch(console.error);