function() {
   this.label = 'cassandra';

   this.render = () => {
      mCurve([[0,.6],[0,.1],[-.3,-.6],[.3,-.6],[0,.1]]);
      mSpline([[.1,.65],[0,.6],[-.1,.65],[-.15,.8],[-.1,.95],[.1,1],[.35,.7],[.3,.3],[.5,.1],[.55,-.1]]);
      this.afterSketch(() => {
         mSpline([[-.1,.95],[.1,.8],[.1,.4],[.45,.2],[.55,-.1]]);
         mLine([-.04,-.65],[-.04,-1.05]);
         mLine([ .04,-.6 ],[ .04,-1]);
         mLine([-.02, .5 ],[-.3,-.1]);
         mLine([ .02, .5 ],[ .2,-.1]);
      });
   }
}
