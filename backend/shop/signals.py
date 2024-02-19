from django.dispatch import receiver
from django.db.models.signals import pre_delete, pre_save, post_save
from .models import Product
import os
from django.conf import settings


@receiver(pre_save, sender=Product)
def store_original_image_path(sender, instance, **kwargs):
    # Store the original image file path before saving the changes
    if instance.pk:
        original_instance = sender.objects.get(pk=instance.pk)
        instance._original_image = original_instance.image


@receiver(post_save, sender=Product)
def delete_changed_image(sender, instance, **kwargs):
    # Delete the old image if it has been changed or removed
    if hasattr(instance, '_original_image'):
        original_image = instance._original_image
        if original_image and original_image != instance.image:
            # Delete the old image file
            if os.path.exists(original_image.path):
                os.remove(original_image.path)


@receiver(pre_delete, sender=Product)
def delete_product(sender, instance, **kwargs):
    if instance.image:
        image_path = os.path.join(settings.MEDIA_ROOT, str(instance.image))
        if os.path.exists(image_path):
            os.remove(image_path)


