"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  RadioGroup,
  Radio,
} from "@nextui-org/react";
import { Logo } from "../icons";

function FooterModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  console.log(
    " _____              _                _____                  _  _      ___ \n" +
      "|  ___|            | |              |  ___|               _| || |_   /   |\n" +
      "| |__    __ _  ___ | |_   ___  _ __ | |__    __ _   __ _ |_  __  _| / /| |\n" +
      "|  __|  / _` |/ __|| __| / _ \\| '__||  __|  / _` | / _` | _| || |_ / /_| |\n" +
      "| |___ | (_| |\\__ \\| |_ |  __/| |   | |___ | (_| || (_| ||_  __  _|___  |\n" +
      "\\____/  \\__,_||___/ \\__| \\___||_|   \\____/  \\__, | \\__, |  |_||_|      |_/\n" +
      "                                             __/ |  __/ |                 \n" +
      "                                            |___/  |___/                  "
  );

  return (
    <div>
      <Button
        onPress={onOpen}
        className="max-w-fit bg-none bg-white dark:bg-black cursor-default"
      >
        made by 스파로스 3기 <p className="font-bold">의문에 프론트엔드 고수</p>
      </Button>
      <Modal isOpen={isOpen} placement={"bottom"} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader></ModalHeader>
              <ModalBody className="text-[1.5rem] text-lime-500 ">
                <div className="flex gap-2 justify-center items-center">
                  <Logo size={40} />
                  <p>이스터에그 #2</p>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default FooterModal;
