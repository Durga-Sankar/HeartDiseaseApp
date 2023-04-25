import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface ChatResponse {
  choices: { text: string }[];
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  showChat = false;
  userInput = '';
  messages: { content: string, isUser: boolean }[] = [];

  constructor(private http: HttpClient) {}

  toggleChat() {
    this.showChat = !this.showChat;
    if (this.showChat && this.messages.length === 0) {
      this.messages.push({ content: 'Need assistance?', isUser: false });
    }
  }

  sendMessage() {
    if (this.userInput.trim() !== '') {
      this.messages.push({ content: this.userInput, isUser: true });

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `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`
      });

      const data = {
        prompt: this.userInput,
        max_tokens: 50,
        temperature: 0.5,
        n: 1,
        stop: ['\n']
      };

      this.http.post<ChatResponse>('https://api.openai.com/v1/completions', data, { headers }).subscribe((data) => {
        console.log(data);
        const response = data.choices[0].text;
        this.messages.push({ content: response, isUser: false });
      });

      this.userInput = '';
    }
  }
}
