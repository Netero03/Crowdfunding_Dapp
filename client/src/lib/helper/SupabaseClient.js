import React from 'react'
import { createClient } from '@supabase/supabase-js'


// console.log(process.env.SUPABASE_KEY)
const supabaseUrl = 'https://voegxfwsqodrciwtmzja.supabase.co'

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvZWd4ZndzcW9kcmNpd3RtemphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2MTg5NDQsImV4cCI6MjAyNDE5NDk0NH0.ehmK8XoKtps8XSThBpzg74DvIrnQS6P8CaGCFMSlnLg"
export const supabase = createClient(supabaseUrl, supabaseKey)

