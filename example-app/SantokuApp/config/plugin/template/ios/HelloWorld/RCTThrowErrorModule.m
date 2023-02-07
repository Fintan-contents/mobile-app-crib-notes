//
//  RCTThrowErrorModule.m
//  ErrorHandling
//

// RCTThrowErrorModule.m
#import "RCTThrowErrorModule.h"
#import <React/RCTLog.h>

@implementation RCTThrowErrorModule

RCT_EXPORT_MODULE(ThrowErrorModule);

RCT_EXPORT_METHOD(throwErrorSyncProcess)
{
  [NSException raise:@"NativeModulesSyncProcessException" format:@"Throw exception in synchronous process."];
  // ↓のようなNSException以外のオブジェクトをthrowした場合は、NSSetUncaughtExceptionHandlerで捕捉できない
  // @throw @"Throw exception in synchronous process.";
  // @throw [NSError errorWithDomain:@"ws4020" code:100 userInfo:nil];
}

RCT_EXPORT_METHOD(throwErrorAsyncProcess)
{
  dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^(void) {
    [NSException raise:@"NativeModulesAsyncProcessException" format:@"Throw exception in asynchronous process."];
  });
}

@end
