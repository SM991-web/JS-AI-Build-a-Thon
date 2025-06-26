// This is a snippet for a code review task using a GenAI model.import { $ } from "execa";
// This is a code review task that uses the GenAI model to analyze code changes made in a Git repository.
import { defDiff } from "genai";

const changes = await git.diff({ staged: true });

defDiff("CODE_CHANGES", changes);

$`## Role
You are a senior developer whose job is to review code changes and provide meaningful feedback.

## Task
Review <CODE_CHANGES>, point out possible mistakes or bad practices, and provide suggestions for improvement.
- Be specific about what's wrong and why it's wrong
- Reference proper coding standards and best practices
- Be brief to get your point across
`;