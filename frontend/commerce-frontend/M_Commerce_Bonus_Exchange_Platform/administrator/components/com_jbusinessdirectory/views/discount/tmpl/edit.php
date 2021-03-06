<?php
/**
 * @package    JBusinessDirectory
 * @subpackage  com_jbusinessdirectory
 *
 * @copyright   Copyright (C) 2007 - 2015 CMS Junkie. All rights reserved.
 * @license     GNU General Public License version 2 or later; 
 */

defined('_JEXEC') or die;

// Include the component HTML helpers.
JHtml::addIncludePath(JPATH_COMPONENT.'/helpers/html');

// Load the tooltip behavior.
JHtml::_('behavior.tooltip');
?>

<script type="text/javascript">
	Joomla.submitbutton = function(task) {	
		if (task == 'discount.cancel' || task == 'discount.aprove' || task == 'discount.disaprove' || !validateCmpForm()) {
			Joomla.submitform(task, document.getElementById('item-form'));
		}
	}
</script>

<?php 
$appSetings = JBusinessUtil::getInstance()->getApplicationSettings();
$user = JFactory::getUser();
?>

<div class="category-form-container">	
	<form action="<?php echo JRoute::_('index.php?option=com_jbusinessdirectory&layout=edit&id='.(int) $this->item->id); ?>" method="post" name="adminForm" id="item-form" class="form-horizontal">
		<div class="clr mandatory oh">
			<p><?php echo JText::_("LNG_REQUIRED_INFO")?></p>
		</div>
		<fieldset class="boxed">
			<h2> <?php echo JText::_('LNG_DISCOUNT_DETAILS');?></h2>
			<div class="form-box">
				<div class="detail_box">
					<div  class="form-detail req"></div>
					<label for="subject"><?php echo JText::_('LNG_NAME')?> </label> 
					<input type="text" name="name" id="name" class="input_txt validate[required]" value="<?php echo $this->item->name ?>"  maxLength="100">
					<div class="clear"></div>
				</div>
				<div class="detail_box">
					<label for="startDate"><?php echo JText::_('LNG_START_DATE')?> </label> 
					<?php echo JHTML::_('calendar', $this->item->start_date, 'start_date', 'start_date', $appSetings->calendarFormat, array('class'=>'inputbox calendar-date', 'size'=>'10',  'maxlength'=>'10')); ?>
					<div class="clear"></div>
				</div>
				<div class="detail_box">
					<label for="endDate"><?php echo JText::_('LNG_END_DATE')?> </label>
					<?php echo JHTML::_('calendar', $this->item->end_date, 'end_date', 'end_date', $appSetings->calendarFormat, array('class'=>'inputbox calendar-date', 'size'=>'10',  'maxlength'=>'10')); ?>
					<div class="clear"></div>
				</div>
				<div class="detail_box">
					<label for="package_ids"><?php echo JText::_('LNG_PACKAGE')?></label> 
					<select name="package_ids[]" id="package_ids" data-placeholder="<?php echo JText::_("LNG_SELECT_PACKAGE") ?>" multiple class="chosen-select">
						<?php
						foreach($this->packages as $package) {
							$selected = false;
							foreach($this->item->package_ids as $pId) {
								if($pId == $package->id)
									$selected = true;
							} ?>
							<option <?php echo $selected ? "selected" : ""?> value='<?php echo $package->id ?>'>
								<?php echo $package->name ?>
							</option>
						<?php
						} ?>
					</select>		
					<div class="clear"></div>
				</div>		
				<div class="detail_box">
					<div  class="form-detail req"></div>
					<label for="code"><?php echo JText::_('LNG_COUPON_CODE')?></label> 
					<input type="text" name="code" id="code" class="input_txt validate[required]" value="<?php echo $this->item->code ?>"  maxLength="50">
					<div class="clear"></div>
				</div>
				<div class="detail_box">
					<div  class="form-detail req"></div>
					<label for="uses_per_coupon"><?php echo JText::_('LNG_USES_PER_COUPON')?></label> 
					<input type="text" name="uses_per_coupon" id="uses_per_coupon" class="input_txt validate[required]" value="<?php echo $this->item->uses_per_coupon ?>"  maxLength="50">
					<div class="clear"></div>
					<span><?php echo JText::_("LNG_USED").": ". $this->item->coupon_used?></span>
				</div>
				<div class="detail_box">
					<div  class="form-detail req"></div>
					<label for="companyId"><?php echo JText::_('LNG_VALUE')?></label> 
					<input type="text" name="value" id="value" class="input_txt validate[required]" value="<?php echo $this->item->value ?>"  maxLength="50">
					<div class="clear"></div>
				</div>
				<div class="detail_box">
					<div  class="form-detail req"></div>
					<fieldset id="price-type" class="radio btn-group btn-group-yesno">
						<input type="radio" class="validate[required]" name="price_type" id="price-value" value="1" <?php echo $this->item->price_type==1? 'checked="checked"' :""?> />
						<label class="btn" for="price-value"><?php echo JText::_('LNG_VALUE')?></label> 
						<input type="radio" class="validate[required]" name="price_type" id="price-percent" value="2" <?php echo $this->item->price_type==2? 'checked="checked"' :""?> />
						<label class="btn" for="price-percent"><?php echo JText::_('LNG_PERCENT')?></label> 
					</fieldset>
					<div class="clear"></div>
				</div>
				<div class="detail_box">
					<label for="state"><?php echo JText::_('LNG_STATE')?></label>
					<select class="chosen-select" name="state" id="state">
						<?php echo JHtml::_('select.options', $this->states, 'value', 'text', $this->item->state);?>
					</select>
					<div class="clear"></div>
				</div>
			</div>
		</fieldset>
		<input type="hidden" name="option" value="<?php echo JBusinessUtil::getComponentName()?>" /> 
		<input type="hidden"name="task" id="task" value="" /> 
		<input type="hidden" name="id" value="<?php echo $this->item->id ?>" /> 
		<?php echo JHTML::_( 'form.token' ); ?>
	</form>
</div>
<script>
	function validateCmpForm() {
		var isError = jQuery("#item-form").validationEngine('validate');
		return !isError;
	}

	jQuery(document).ready(function() {
		jQuery(".chosen-select").chosen({width:"95%", disable_search_threshold: 5});
	});
</script>