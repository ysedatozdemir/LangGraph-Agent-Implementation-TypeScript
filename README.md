# LangGraph Greeting Agent (TypeScript)

A minimal LangGraph implementation in TypeScript showcasing the framework's core concepts without LLM dependencies. This project demonstrates how to build a simple single-node agent using StateGraph, proper state management, and START → node → END flow.

## 🎯 Purpose

This is a learning project that focuses on:
- Understanding LangGraph's basic architecture in TypeScript
- Working with StateGraph and state interfaces
- Implementing nodes without LLM complexity
- Following best practices for TypeScript package management with `pnpm`
- Leveraging TypeScript's type safety for agent development

## ✨ Features

- ✅ Single-node agent with clear state interface
- ✅ No LLM dependencies - pure TypeScript logic
- ✅ Proper START → greeting_node → END structure
- ✅ Managed with `pnpm` for efficient package management
- ✅ Interactive and programmatic usage modes
- ✅ Full TypeScript type safety with strict mode
- ✅ ESM modules for modern JavaScript
- ✅ Well-documented development process

## 🚀 What It Does

Accepts a user's name as input and returns a personalized greeting message.

**Input:** `{ name: "Sedat" }`  
**Output:** `{ greeting: "Hello, Sedat! Welcome!" }`

## 📋 Prerequisites

- Node.js 18 or higher
- [pnpm](https://pnpm.io/) package manager

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/ysedatozdemir/LangGraph-Agent-Implementation-TypeScript.git
cd LangGraph-Agent-Implementation-TypeScript
```

2. Install dependencies with pnpm:
```bash
pnpm install
```

3. (Optional) Build the project:
```bash
pnpm build
```

## 💻 Usage

### Interactive Mode (Recommended)

Run the agent interactively and enter names when prompted:
```bash
pnpm interactive
```

**Example session:**
```
============================================================
🤖 LangGraph Greeting Agent - Interactive Mode
============================================================

This agent will greet you by name!
Type 'quit', 'exit', or 'q' to stop.

👤 Enter your name: Sedat
🤖 Hello, Sedat! Welcome!

👤 Enter your name: Alice
🤖 Hello, Alice! Welcome!

👤 Enter your name: quit
👋 Goodbye! Thanks for using the greeting agent!
```

### Demo Mode

Run the agent with predefined test cases:
```bash
pnpm dev
```

**Output:**
```
==================================================
LangGraph Greeting Agent - Test Run
==================================================

📥 Input: Sedat
📤 Output: Hello, Sedat! Welcome!

📥 Input: Alice
📤 Output: Hello, Alice! Welcome!

📥 Input: Bob
📤 Output: Hello, Bob! Welcome!

📥 Input: 世界
📤 Output: Hello, 世界! Welcome!

==================================================
```

### Production Mode

Build and run the compiled JavaScript:
```bash
# Build TypeScript to JavaScript
pnpm build

# Run the compiled code
pnpm start
```

### Programmatic Usage

Use the agent in your own TypeScript/JavaScript code:
```typescript
import { createGraph } from "./graph.js";

// Create the graph
const graph = createGraph();

// Invoke with a name
const result = await graph.invoke({ 
  name: "Sedat", 
  greeting: "" 
});

console.log(result.greeting); // Output: Hello, Sedat! Welcome!
```

## 📁 Project Structure
```
LangGraph-Agent-Implementation-TypeScript/
├── src/
│   ├── index.ts            # Package exports
│   ├── state.ts            # State interface definition
│   ├── graph.ts            # Graph and node implementation
│   ├── main.ts             # Demo/test script
│   └── interactive.ts      # Interactive CLI
├── dist/                   # Compiled JavaScript (after build)
├── node_modules/           # Dependencies
├── .gitignore             # Git ignore rules
├── package.json           # Project metadata and scripts
├── pnpm-lock.yaml        # Locked dependencies
├── tsconfig.json         # TypeScript configuration
├── README.md             # This file
└── dev-history.md        # Development process log
```

## 🏗️ Graph Architecture
```
START → greeting_node → END
```

**State Interface:**
```typescript
interface GreetingState {
  name: string;      // Input: user's name
  greeting: string;  // Output: greeting message
}
```

**Node Function:**
```typescript
function greetingNode(state: GreetingState): Partial<GreetingState> {
  const name = state.name;
  const greetingMessage = `Hello, ${name}! Welcome!`;
  return { greeting: greetingMessage };
}
```

## 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Run demo script with tsx (no build needed) |
| `pnpm interactive` | Run interactive CLI mode |
| `pnpm build` | Compile TypeScript to JavaScript |
| `pnpm start` | Run compiled JavaScript |

## 🧪 Testing

Run the demo script to verify everything works:
```bash
pnpm dev
```

For interactive testing:
```bash
pnpm interactive
```

## 📝 Development History

See [dev-history.md](dev-history.md) for detailed development process, AI prompts used, and manual changes made during implementation.

## 🔍 TypeScript Configuration

This project uses strict TypeScript configuration:
- **Target:** ES2022
- **Module:** ESNext with bundler resolution
- **Strict mode:** Enabled
- **ESM imports:** Required (use `.js` extensions)

## 🤝 Contributing

This is a learning project, but suggestions and improvements are welcome! Feel free to open an issue or submit a pull request.

## 📄 License

MIT License - feel free to use this code for learning purposes.

## 🔗 Resources

- [LangGraph Documentation](https://langchain-ai.github.io/langgraph/)
- [LangGraph TypeScript Docs](https://langchain-ai.github.io/langgraphjs/)
- [pnpm Documentation](https://pnpm.io/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

## 🔄 Related Projects

- [Python Implementation](https://github.com/ysedatozdemir/LangGraph-Agent-Implementation-Python) - Same agent built with Python

---

**Note:** This project is part of an internship technical task focused on demonstrating research skills, environment setup, and ability to work with new technologies across different programming languages. The simplicity of the code is intentional - the emphasis is on understanding LangGraph fundamentals and proper development practices in TypeScript.