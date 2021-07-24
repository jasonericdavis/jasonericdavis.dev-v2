---
title: How To Run A Process In The Background Of A Remote  Server
published: 'July, 23 2021'
description: 'Execute long running process in the background of a remote server.'
---
Sometimes it's necessary to execute a long-running process on a remote server. It is easy enough to execute the command, but what happens if you lose connection to the server? The answer is to execute the command push the process to the background. This can be achieved with the following commands.

First, execute the command, redirect the output and run the command in the background.

```
long-running-command > /dev/null &
```

Although using this command runs the process runs in the background, the process is still tied to that particular terminal session. If the session disconnects the process terminates. After executing this command the terminal will output a process ID. Using the process ID, the process can then be disconnected from the terminal session by running the following command:

```
disown [process-id]
```

Use the ``top`` command to verify the process is running. Redirect the output to a file to monitor the file for a completion message.