// User configuration for the startpage. Update the palette, location, and your preferred tabs, categories, and links.
const palette = macchiato;

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "France",
    scale: "C",
  },
  clock: {
    format: "h:i:s",
    icon_color: palette.maroon,
  },
  search: {
    engines: {
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      g: ["https://google.com/search?q=", "Google"],
    },
  },
  keybindings: {
    "s": "search-bar",
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://youtube.com",
  openLastVisitedTab: true,
  tabs: [










    // kerogs
    {
      name: "Kerogs",
      background_url: "src/img/banners/banner_09.gif",
      categories: [
        {
          name: "Navigation",
          links: [
            {
              name: "Google",
              url: "https://www.google.com",
              icon: "search",
              icon_color: palette.blue,
            },
            {
              name: "Reddit",
              url: "https://www.reddit.com",
              icon: "brand-reddit",
              icon_color: palette.red,
            }
          ],
        },


        {
          name: "Espace de travail",
          links: [
            {
              name: "Gmail (perso)",
              url: "https://mail.google.com/mail/u/0/",
              icon: "brand-gmail",
              icon_color: palette.green,
            },
            {
              name: "Gmail (pro)",
              url: "https://mail.google.com/mail/u/2/",
              icon: "brand-gmail",
              icon_color: palette.red,
            },
            {
              name: "Agenda",
              url: "https://calendar.google.com",
              icon: "calendar",
              icon_color: palette.peach,
            },
            {
              name: "Drive",
              url: "https://drive.google.com",
              icon: "brand-google-drive",
              icon_color: palette.yellow,
            }
          ],
        },



        {
          name: "dev & IA",
          links: [
            {
              name: "GitHub",
              url: "https://github.com/kerogs",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "ChatGPT",
              url: "https://chat.openai.com",
              icon: "brand-openai",
              icon_color: palette.yellow,
            },
            {
              name: "DeepSeek",
              url: "https://chat.deepseek.com/",
              icon: "fish",
              icon_color: palette.yellow,
            }
          ],
        },

      ],
    },


    // REPOS
    {
      "name": "repos",
      "background_url": "src/img/banners/banner_01.gif",
      "categories": [
        {
          name: "Vidéo",
          links: [
            {
              name: "YouTube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.peach,
            },
            {
              name: "Thonain",
              url: "https://www.youtube.com/@thonain",
              icon: "cpu",
              icon_color: palette.blue,
            },
            {
              name: "RCC:Reloaded",
              url: "https://www.youtube.com/@rccreloaded369",
              icon: "coffee",
              icon_color: palette.mauve,
            },
            {
              name: "Tiktok",
              url: "https://www.tiktok.com",
              icon: "brand-tiktok",
              icon_color: palette.pink,
            }
          ],
        },

        {
          "name": "Musiques",
          "links": [
            {
              name: "SoundCloud",
              url: "https://soundcloud.com",
              icon: "music",
              icon_color: palette.yellow,
            },
            {
              name: "musicForProgramming();",
              url: "https://musicforprogramming.net/seventy",
              icon: "binary-tree",
              icon_color: palette.green,
            },
          ]
        },

        {
          "name": "Films & Séries",
          "links": [
            {
              name: "Netflix",
              url: "https://www.netflix.com",
              icon: "brand-netflix",
              icon_color: palette.red,
            }
          ]
        }
      ]
    },


    // LOCAL
    {
      "name": "local",
      "background_url": "src/img/banners/17.gif",
      "categories": [

        {
          "name": "SELF HOSTED",
          "links": [
            {
              name: "KerogsNet Portal",
              url: "http://192.168.1.16/",
              icon: "network",
              icon_color: palette.green,
            },
            {
              name: "Emby",
              url: "http://192.168.1.16:8096", // adapte si nécessaire
              icon: "video",
              icon_color: palette.blue,
            },
          ]
        },

        {
          "name": "RR family",
          "links": [
            {
              name: "Sonarr",
              url: "http://192.168.1.16:8989",
              icon: "video",
              icon_color: palette.green,
            },
            {
              name: "Radarr",
              url: "http://192.168.1.16:7878",
              icon: "device-tv",
              icon_color: palette.blue,
            },
            {
              name: "Prowlarr",
              url: "http://192.168.1.16:9696",
              icon: "world-search",
              icon_color: palette.red,
            }
          ],
        }

      ]
    }



  ],




};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
