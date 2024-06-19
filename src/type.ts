export interface ClothesItem {
  description: string;
  name: string;
}
type Mood = 'happy' | 'sad' | 'anger' | 'fear' | 'surprise' | 'disgust';

export interface ResponseData {
  clothes: ClothesItem[];
  baseline: Mood;
  today: number;
}

export interface RequestData {
  gttscope: 'normal' | 'only';
  baseline: Mood;
}
