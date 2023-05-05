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
                type: 'text',
                text: 'Hello, World!',
              },
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
                type: 'text',
                text: 'Hello, World!',
              },
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
