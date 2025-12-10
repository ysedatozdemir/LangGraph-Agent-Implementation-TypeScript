/**
 * LangGraph greeting agent implementation.
 */
import { StateGraph, START, END } from "@langchain/langgraph";
import { GreetingState } from "./state.js";

/**
 * Generate a greeting message from the input name.
 * 
 * This node does NOT use any LLM - it's pure TypeScript logic.
 */
function greetingNode(state: GreetingState): Partial<GreetingState> {
  const name = state.name;
  const greetingMessage = `Hello, ${name}! Welcome!`;
  return { greeting: greetingMessage };
}

/**
 * Create and compile the greeting graph.
 * 
 * Graph structure:
 *   START -> greeting_node -> END
 */
export function createGraph() {
  // Initialize the graph with our state
  const workflow = new StateGraph<GreetingState>({
    channels: {
      name: null,
      greeting: null,
    },
  });

  // Add the greeting node
  workflow.addNode("greeting_node", greetingNode);

  // Define the flow: START -> greeting_node -> END
  workflow.addEdge(START, "greeting_node");
  workflow.addEdge("greeting_node", END);

  // Compile the graph
  const graph = workflow.compile();

  return graph;
}