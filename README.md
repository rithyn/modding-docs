# Modding Documentation

A project by [@rithyn](https://github.com/rithyn) to produce a high-performance, user-friendly documentation tool. Free feel to report any issues/feedbacks or contribute to the project :)



## Run locally

To run locally, you can clone this repository with git

```bash
git clone https://github.com/rithyn/modding-docs.git
```

Then, install Depencencies:


```bash
npm i
```

Then, you can write this to run locally the website

```bash
npm run dev
```






Based on Nextra Tamplate, with React and Next.js



# Starblast Modding :
```mermaid
---
config:
  layout: fixed
---
flowchart LR
 subgraph ModdingClient["Modding Client"]
        ModCode["Mod code"]
        EventFunc["Event function"]
        TickingFunc["Ticking function"]
        ModdingEngine["Modding Engine"]
        Terminal["Terminal"]
  end
 subgraph WebSocketServer["WebSocket Server"]
        SecretEngine["Secret Engine"]
  end
 subgraph StarblastClient["Starblast Client"]
        UserInterface["User interface"]
        MainEngine["Main Engine"]
  end
    EventFunc -- execute commands in events --> ModdingEngine
    TickingFunc -- execute commands 60 times per second --> ModdingEngine
    ModdingEngine -- send events --> EventFunc
    ModdingEngine -- responses to TickingFunc --> TickingFunc
    Terminal -- responses + tick logging --> ModdingEngine
    UserInterface -- setup --> MainEngine
    MainEngine -- responses when something changes --> UserInterface
    ModdingClient -- "send messages set commands etc." --> WebSocketServer
    WebSocketServer -- "responses events etc." --> ModdingClient
    WebSocketServer -- send messages --> StarblastClient
    StarblastClient -- "responses events etc." --> WebSocketServer
    n1["Starblast Modding"]
    n1@{ img: "https://raw.githubusercontent.com/rithyn/rithy-archives/refs/heads/main/logo.png", h: 180, w: 288, pos: "b"}
```





