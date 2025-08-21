export function useUserInfoTitle() {
  const getTitle = (data: { preUnit: string; value: number | string; unit?: string }[]) => {
    return data
      .filter((item) => item.value !== undefined && item.value !== null && item.value !== '')
      .map((item) => `${item.preUnit || ''} ${item.value}${item.unit || ''}`)
      .join(' • ')
  }
  return { getTitle }
}
