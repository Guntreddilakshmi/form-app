Handling Input with onChange 
Objective: Capture and update user input dynamically.  
Task: Create a text input field and show real-time changes.  
Pseudo Code:  
Step 1: const [input, setInput] = useState("")
Step 2: Create input field → value={input}, onChange={e => setInput(e.target.value)}
Step 3: Display <p>{input}</p> below input box
Step 4: As user types, text updates instantly
