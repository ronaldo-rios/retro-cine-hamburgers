type ErrorWithMessage = {
  message: string
}

const hasMessage = (error: unknown): error is ErrorWithMessage => {
  return (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof (error as { message: unknown }).message === "string"
  )
}

export const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message
  }

  if (typeof error === "string") {
    return error
  }

  if (hasMessage(error)) {
    return error.message
  }

  return "Erro inesperado. Tente novamente."
}
