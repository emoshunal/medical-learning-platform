import { MoreVertical } from "@tamagui/lucide-icons"
import React from "react"
import { Button } from "tamagui"

type IconButtonProps = {
  icon: typeof MoreVertical
  onPress?: () => void
}

export function IconButton({ icon: Icon, onPress }: IconButtonProps) {
  return (
    <Button
      size="$2"
      chromeless
      onPress={onPress}
      icon={<Icon size={20} />}
    />
  )
}
