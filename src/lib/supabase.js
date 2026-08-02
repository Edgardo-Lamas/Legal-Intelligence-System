import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Sin estas variables createClient tira y la app entera queda en blanco,
// sin ninguna pista de por qué. El mensaje explícito ahorra la sesión de debug.
if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
        'Faltan VITE_SUPABASE_URL y/o VITE_SUPABASE_ANON_KEY. ' +
        'Cargalas en .env.local (desarrollo) o en las variables de entorno del proyecto en Vercel (producción).'
    )
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
