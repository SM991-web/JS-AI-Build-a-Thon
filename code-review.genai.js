// This is a code review task that uses the GenAI model to analyze code changes made in a Git repository.

// import { defDiff } from "genai"; // <-- Remove or comment out

// You need to define or import 'git' if not already done
// Example: import simpleGit from "simple-git"; const git = simpleGit();

const changes = await git.diff({ staged: true });

// defDiff("CODE_CHANGES", changes); // <-- Remove or comment out

console.log(`
## Role
You are a senior developer whose job is to review code changes and provide meaningful feedback.

## Task
Review the following code changes, point out possible mistakes or bad practices, and provide suggestions for improvement.
- Be specific about what's wrong and why it's wrong
- Reference proper coding standards and best practices
- Be brief to get your point across

CODE_CHANGES:
${changes}
`);