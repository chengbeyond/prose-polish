// 配置文件示例
// 使用方法：
// 1. 复制此文件并重命名为 config.js
// 2. 将下面的示例 API 密钥替换为你的实际密钥

export const CONFIG = {
    // 通义千问 API 密钥
    // 获取方式：访问 https://dashscope.aliyun.com/
    TONGYI_API_KEY: 'your-tongyi-api-key-here',

    // DeepSeek API 密钥
    // 获取方式：访问 DeepSeek 开放平台
    DEEPSEEK_API_KEY: 'your-deepseek-api-key-here',

    // 自定义模型配置
    // 如果不需要自定义模型，可以保持为 null
    CUSTOM_MODEL: {
        BASE_URL: '',  // 例如：https://api.openai.com/v1
        API_KEY: '',   // 你的 API Key
        MODEL: ''      // 例如：gpt-3.5-turbo
    }
}; 