// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const storage: { [key: string]: any } = new Proxy(
    {},
    {
        get(_, property: string) {
            const value = localStorage.getItem(property)

            try {
                return value === null ? undefined : (JSON.parse(value) as unknown)
            } catch {
                return value
            }
        },

        set(_, property: string, value: string | Record<string, unknown>) {
            localStorage.setItem(
                property,
                typeof value === 'object' ? JSON.stringify(value) : value
            )
            return true
        },

        deleteProperty(_, property: string) {
            localStorage.removeItem(property)
            return true
        }
    }
)
