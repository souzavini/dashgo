import { Avatar, Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

interface ProfileProps {
    showProfileData?: boolean;
}


export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (<Box mr="4" textAlign="right">
                <Text>Diego fernandes</Text>
                <Text color="gray.300" fontSize="small">diego.gmail.com</Text>
            </Box>)}
            
            <Avatar size="md" name="Diego Fernandes" />
        </Flex>
    );
}