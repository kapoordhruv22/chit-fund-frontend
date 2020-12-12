import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChatsComponent } from "./chats/chats.component";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

@NgModule({
  declarations: [ChatsComponent],
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [ChatsComponent]
})
export class ComponentsModule {}
