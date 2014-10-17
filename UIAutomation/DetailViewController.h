//
//  DetailViewController.h
//  UIAutomation
//
//  Created by kishikawa katsumi on 2014/10/18.
//  Copyright (c) 2014年 kishikawa katsumi. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface DetailViewController : UIViewController

@property (strong, nonatomic) id detailItem;
@property (weak, nonatomic) IBOutlet UILabel *detailDescriptionLabel;

@end

