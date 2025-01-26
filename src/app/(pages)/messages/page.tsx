"use client";

import { useState, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AtSign, Dot, Mic, Search, ArrowLeft, Paperclip } from "lucide-react";
import Image from "next/image";

interface Message {
  id: number;
  text: string;
  image?: string;
  sender: "user" | "other";
  timestamp: string;
}

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState<
    number | null
  >(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "السلام عليكم ورحمة الله وبركاته",
      sender: "other",
      timestamp: "10:30 ص",
    },
    {
      id: 2,
      text: "وعليكم السلام ورحمة الله وبركاته",
      sender: "user",
      timestamp: "10:31 ص",
    },
    {
      id: 3,
      text: "أحتاج السيارة هذه",
      image: "/Images/Frame 324.jpg",
      sender: "other",
      timestamp: "10:32 ص",
    },
  ]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleConversationClick = (id: number) => {
    setSelectedConversation(id);
  };

  const handleBackClick = () => {
    setSelectedConversation(null);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          text: message,
          sender: "user",
          timestamp: new Date().toLocaleTimeString("ar-SA", {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
      setMessage("");
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Handle file upload here
      // For demo purposes, we'll just add it as a message
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          text: `تم إرفاق ملف: ${file.name}`,
          sender: "user",
          timestamp: new Date().toLocaleTimeString("ar-SA", {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    }
  };

  return (
    <div
      className="container flex flex-col h-screen p-0 mx-auto md:flex-row md:p-4 md:gap-8"
      dir="rtl"
    >
      {/* Conversations List */}
      <div
        className={`border-border md:w-80 md:border md:rounded-2xl ${
          selectedConversation !== null ? "hidden md:block" : "w-full"
        }`}
      >
        <div className="p-4 border-b">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-semibold">الرسائل</h1>
          </div>
          <div className="relative">
            <Search className="absolute w-4 h-4 right-3 top-3 text-primary" />
            <Input className="pr-9" placeholder="بحث سريع" />
          </div>
        </div>
        <ScrollArea className="h-[calc(100vh-8rem)]">
          <div className="p-4 space-y-4">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-accent"
                onClick={() => handleConversationClick(conversation.id)}
              >
                <Avatar>
                  <AvatarImage src={conversation.avatar} />
                  <AvatarFallback>{conversation.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-medium">{conversation.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {conversation.lastMessage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Chat Area */}
      <div
        className={`flex flex-col flex-1 border-border md:border md:rounded-2xl ${
          selectedConversation === null ? "hidden md:flex" : "w-full"
        }`}
      >
        <div className="p-4 border-b">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={handleBackClick}
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>
            <Avatar>
              <AvatarImage src="/Images/Frame 324.jpg" />
              <AvatarFallback>M</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-medium">مؤسسة أبو راشد للسيارات</h2>
              <div className="flex items-center">
                <p className="text-sm text-muted-foreground">متصل الآن</p>
                <Dot className="w-10 h-10 text-green-400" />
              </div>
            </div>
          </div>
        </div>

        <ScrollArea className="flex-1 p-4">
          <div className="space-y-6">
            {messages.map((msg, index) => (
              <div
                key={msg.id}
                className={`flex ${
                  index % 2 === 0 ? "justify-end" : "justify-start gap-4"
                }`}
              >
                <Avatar className={index % 2 === 0 ? "order-2" : "order-1"}>
                  <AvatarImage src="/Images/Frame 324.jpg" />
                  <AvatarFallback>M</AvatarFallback>
                </Avatar>

                <div
                  className={`flex flex-col gap-1 ${
                    index % 2 === 0 ? "order-1" : "order-2"
                  }`}
                >
                  <Card
                    className={`max-w-[80%] p-3 ${
                      msg.sender === "user"
                        ? "bg-primary/10 rounded-2xl rounded-tr-none"
                        : "bg-muted rounded-2xl rounded-bl-none"
                    }`}
                  >
                    <p>{msg.text}</p>
                    {msg.image && (
                      <Image
                        src={msg.image || "/placeholder.svg"}
                        alt="Attached image"
                        width={300}
                        height={200}
                        className="mt-2 rounded-lg"
                      />
                    )}
                  </Card>
                  <span className="px-2 text-xs text-muted-foreground">
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="p-4 border-t">
          <div className="flex items-center gap-2">
            <div className="relative w-full">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1 h-12 pl-10 pr-4 rounded-2xl"
                placeholder="اكتب رسالة..."
              />
              <button
                onClick={handleSendMessage}
                className="absolute -translate-y-1/2 left-2 top-1/2"
              >
                <Image
                  src="/Icons/sendRed.png"
                  alt="send"
                  width={20}
                  height={20}
                  className="w-5 h-5 cursor-pointer"
                />
              </button>
            </div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              className="hidden"
              multiple
            />
            <Button
              variant="outline"
              size="icon"
              className="hidden sm:inline-flex"
              onClick={() => fileInputRef.current?.click()}
            >
              <Paperclip className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hidden sm:inline-flex"
            >
              <Mic className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hidden sm:inline-flex"
            >
              <AtSign className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const conversations = [
  {
    id: 1,
    name: "مؤسسة أبو راشد للسيارات",
    lastMessage: "وعليكم السلام ورحمة الله وبركاته",
    avatar: "/Images/Frame 324.jpg",
  },
  {
    id: 2,
    name: "آل مكتوم موتورز",
    lastMessage: "نشكر لك التوفيق",
    avatar: "/Images/Frame 324.jpg",
  },
  {
    id: 3,
    name: "الليثي موتورز",
    lastMessage: "وعليكم السلام ورحمة الله وبركاته",
    avatar: "/Images/Frame 324.jpg",
  },
];
