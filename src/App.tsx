import React from 'react'
import liff from '@line/liff'
import styles from './App.module.css'
import Header from './components/Header'
import Snippet from './components/Snippet'
import Input from './components/Input'

function App() {
  let isLoggedIn = false
  try {
    isLoggedIn = liff.isLoggedIn()
  } catch (e) {
    console.log(e)
  }
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.liffIdBox}>
          <Input
            label="LIFF ID"
            readonly
            value={process.env.REACT_APP_LIFF_ID || ''}
          />
        </div>
        
        {!isLoggedIn ? (
          <Snippet
            apiName="LOGIN"
            version="2.0"
            docUrl="/"
            skipAutoRun={true}
            runner={async () => {
              return liff.login()
            }}
          />
        ) : (
          <Snippet
            apiName="LOGOUT"
            version="2.0"
            docUrl="https://developers.line.biz/en/reference/liff/#logout"
            skipAutoRun={true}
            hideResponse={true}
            runner={async () => {
              // reload after logout.
              setTimeout(() => {
                location.reload()
              }, 1000)
              return liff.logout()
            }}
          />
           <Snippet
          apiName="shareTargetPicker"
          version="2.0"
          docUrl="https://developers.line.biz/en/reference/liff/#share-target-picker"
          needRequestPayload={true}
          hideResponse={true}
          defaultRequestPayload={JSON.stringify(
            [
               {
                  "type": "flex",
                  "altText": "หัวเรื่อง",
                  "contents": {
                    "type": "text",
                    "text": "แก้ไขตรงนี้!"
                  }
               }
            ],
            null,
            4
          )}
          skipAutoRun={true}
          runner={async (options) => {
            return await liff.shareTargetPicker(JSON.parse(options))
          }}
        />
        )}
       
        
        
        <Snippet
          apiName="shareTargetPicker"
          version="2.0"
          docUrl="https://developers.line.biz/en/reference/liff/#share-target-picker"
          needRequestPayload={true}
          hideResponse={true}
          defaultRequestPayload={JSON.stringify(
            [
               {
                  "type": "flex",
                  "altText": "หัวเรื่อง",
                  "contents": {
                    "type": "text",
                    "text": "แก้ไขตรงนี้!"
                  }
               }
            ],
            null,
            4
          )}
          skipAutoRun={true}
          runner={async (options) => {
            return await liff.shareTargetPicker(JSON.parse(options))
          }}
        />
        <Snippet
          apiName="liff.scanCodeV2"
          version="2.15"
          docUrl="https://developers.line.biz/en/reference/liff/#scan-code-v2"
          skipAutoRun={true}
          runner={async () => {
            if (liff.scanCodeV2) {
              return await liff.scanCodeV2()
            } else {
              return 'scanCode API is not available on this platform'
            }
          }}
        />

        <Snippet
          apiName="shareTargetPicker"
          version="2.0"
          docUrl="https://developers.line.biz/en/reference/liff/#share-target-picker"
          needRequestPayload={true}
          hideResponse={true}
          defaultRequestPayload={JSON.stringify(
            [
        {
    "type": "flex",
    "altText": " Message",
    "contents": {
        "type": "carousel",
        "contents": [
            {
                "type": "bubble",
                "header": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "text",
                            "text": "โปรโมชั่น",
                            "align": "center"
                        }
                    ]
                },
                "hero": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "text",
                            "text": "ฝาก 10฿ รับ 100",
                            "align": "center",
                            "wrap": true,
                            "weight": "bold",
                            "size": "xl"
                        },
                        {
                            "type": "text",
                            "text": "(เทรินโอเวอร์ 1 เท่า)",
                            "margin": "md",
                            "align": "center"
                        }
                    ]
                },
                "body": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "separator"
                        }
                    ]
                },
                "footer": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "button",
                            "action": {
                                "type": "uri",
                                "label": "สมัครเลย",
                                "uri": "https://liff.line.me/1657395900-VxKP6gdg"
                            },
                            "style": "primary"
                        },
                        {
                            "type": "text",
                            "text": "รับได้ตลอด ถอนได้ไม่อั้น",
                            "margin": "md",
                            "align": "center"
                        }
                    ]
                }
            },
            {
                "type": "bubble",
                "header": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "text",
                            "text": "โปรโมชั่น",
                            "align": "center"
                        }
                    ]
                },
                "hero": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "text",
                            "text": "ฝาก 50฿ รับ 600",
                            "align": "center",
                            "weight": "bold",
                            "size": "xl"
                        },
                        {
                            "type": "text",
                            "text": "(เทรินโอเวอร์ 1 เท่า)",
                            "align": "center",
                            "margin": "md"
                        }
                    ]
                },
                "body": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "separator"
                        }
                    ]
                },
                "footer": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "button",
                            "action": {
                                "type": "uri",
                                "label": "สมัครเลย",
                                "uri": "https://liff.line.me/1657395900-VxKP6gdg"
                            },
                            "style": "primary"
                        },
                        {
                            "type": "text",
                            "text": "รับได้ตลอด ถอนได้ไม่อั้น",
                            "margin": "md",
                            "align": "center"
                        }
                    ]
                }
            },
            {
                "type": "bubble",
                "header": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "text",
                            "text": "โปรโมชั่น",
                            "align": "center"
                        }
                    ]
                },
                "hero": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "text",
                            "text": "ฝาก 100฿ รับ 1,300",
                            "align": "center",
                            "weight": "bold",
                            "size": "xl"
                        },
                        {
                            "type": "text",
                            "text": "(เทรินโอเวอร์ 1 เท่า)",
                            "align": "center",
                            "margin": "md"
                        }
                    ]
                },
                "body": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "separator"
                        }
                    ]
                },
                "footer": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "button",
                            "action": {
                                "type": "uri",
                                "label": "สมัครเลย",
                                "uri": "https://liff.line.me/1657395900-VxKP6gdg"
                            },
                            "style": "primary"
                        },
                        {
                            "type": "text",
                            "text": "รับได้ตลอด ถอนได้ไม่อั้น",
                            "margin": "md",
                            "align": "center"
                        }
                    ]
                }
            },
            {
                "type": "bubble",
                "header": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "text",
                            "text": "โปรโมชั่น",
                            "align": "center"
                        }
                    ]
                },
                "hero": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "text",
                            "text": "ฝาก 500฿ รับ 7,000",
                            "align": "center",
                            "weight": "bold",
                            "size": "xl"
                        },
                        {
                            "type": "text",
                            "text": "(เทรินโอเวอร์ 1 เท่า)",
                            "align": "center",
                            "margin": "md"
                        }
                    ]
                },
                "body": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "separator"
                        }
                    ]
                },
                "footer": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "button",
                            "action": {
                                "type": "uri",
                                "label": "สมัครเลย",
                                "uri": "https://liff.line.me/1657395900-VxKP6gdg"
                            },
                            "style": "primary"
                        },
                        {
                            "type": "text",
                            "text": "รับได้ตลอด ถอนได้ไม่อั้น",
                            "margin": "md",
                            "align": "center"
                        }
                    ]
                }
            },
            {
                "type": "bubble",
                "header": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "text",
                            "text": "โปรโมชั่น",
                            "align": "center"
                        }
                    ]
                },
                "hero": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "text",
                            "text": "ฝาก 1,000฿ รับ 15,000",
                            "align": "center",
                            "weight": "bold",
                            "size": "xl"
                        },
                        {
                            "type": "text",
                            "text": "(เทรินโอเวอร์ 1 เท่า)",
                            "align": "center",
                            "margin": "md"
                        }
                    ]
                },
                "body": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "separator"
                        }
                    ]
                },
                "footer": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "button",
                            "action": {
                                "type": "uri",
                                "label": "สมัครเลย",
                                "uri": "https://liff.line.me/1657395900-VxKP6gdg"
                            },
                            "style": "primary"
                        },
                        {
                            "type": "text",
                            "text": "รับได้ตลอด ถอนได้ไม่อั้น",
                            "margin": "md",
                            "align": "center"
                        }
                    ]
                }
            }
        ]
    }
}
      ],
            null,
            4
          )}
          skipAutoRun={true}
          runner={async (options) => {
            return await liff.shareTargetPicker(JSON.parse(options))
          }}
        />

        <Snippet
          apiName="liff.closeWindow"
          version="1.0"
          docUrl="https://developers.line.biz/en/reference/liff/#close-window"
          skipAutoRun={true}
          hideResponse={true}
          runner={async () => {
            return await liff.closeWindow()
          }}
        />
      </div>
    </>
  )
}

export default App
