import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'antd/dist/antd.css';
import AppLayout from "@/modules/app/components/AppLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
  )
}
