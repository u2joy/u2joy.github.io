// 在控制台中显示站点最新发布时间
(function() {
  // 等待页面完全加载
  window.addEventListener('load', function() {
    // 使用全局变量获取构建时间（由 build-timestamp.js 提供）
    const buildTimeString = window.BLOG_BUILD_TIME || '未知';
    
    // 网站标题
    const siteName = document.title;
    
    // 在控制台中以不同样式显示发布信息
    console.log(
      '%c ' + siteName + ' %c 最后发布于: ' + buildTimeString + ' ',
      'background:#3e4149; color:#fff; font-size: 12px; font-weight: bold; padding: 4px 6px; border-radius: 3px 0 0 3px;',
      'background:#41b883; color:#fff; font-size: 12px; padding: 4px 6px; border-radius: 0 3px 3px 0;'
    );
  });
})(); 
