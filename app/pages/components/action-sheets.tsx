import React from "react"
import { Button, Sheet, Text, YStack } from "tamagui"

export type Action = {
  label: string
  onPress: () => void
}

type ActionSheetProps = {
  open: boolean
  onOpenChange: (val: boolean) => void
  actions: Action[]
}

export function ActionSheet({ open, onOpenChange, actions }: ActionSheetProps) {
  return (
    <Sheet
      modal
      open={open}
      onOpenChange={onOpenChange}
      snapPoints={[40]}
      dismissOnSnapToBottom
    >
      <Sheet.Overlay />
      <Sheet.Frame padding="$4" gap="$3">
        <YStack>
          {actions.map((action, index) => (
            <Button
              key={index}
              chromeless
              onPress={() => {
                action.onPress()
                onOpenChange(false)
              }}
            >
              <Text>{action.label}</Text>
            </Button>
          ))}
        </YStack>
      </Sheet.Frame>
    </Sheet>
  )
}
